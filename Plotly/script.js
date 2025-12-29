// Arrays to store all plotted points
let xPoints = [];
let yPoints = [];
let zPoints = [];
let isConnected = false; // Track if points are connected

// Sorted connection state
let sortAxis = 'none'; // 'none', 'x', 'y', or 'z'
let sortedXPoints = [];
let sortedYPoints = [];
let sortedZPoints = [];

// Plane state
let showPlane = false;
let planeOrientation = 'xy'; // Default: XY plane (moves up/down on Z)
let planePosition = 25;
let animationFrameId = null;

// Load saved points from localStorage on page load
function loadPointsFromStorage() {
  const savedData = localStorage.getItem('plotly3DPoints');
  if (savedData) {
    const data = JSON.parse(savedData);
    xPoints = data.xPoints || [];
    yPoints = data.yPoints || [];
    zPoints = data.zPoints || [];
  }
}

// Save points to localStorage
function savePointsToStorage() {
  const data = {
    xPoints: xPoints,
    yPoints: yPoints,
    zPoints: zPoints
  };
  localStorage.setItem('plotly3DPoints', JSON.stringify(data));
}

// Function to sort points by selected axis
function sortPointsByAxis(axis) {
  if (xPoints.length === 0) return;
  
  // Create array of point objects
  const points = xPoints.map((x, i) => ({
    x: xPoints[i],
    y: yPoints[i],
    z: zPoints[i]
  }));
  
  // Sort by selected axis
  if (axis === 'x') {
    points.sort((a, b) => a.x - b.x);
  } else if (axis === 'y') {
    points.sort((a, b) => a.y - b.y);
  } else if (axis === 'z') {
    points.sort((a, b) => a.z - b.z);
  }
  
  // Extract sorted coordinates
  sortedXPoints = points.map(p => p.x);
  sortedYPoints = points.map(p => p.y);
  sortedZPoints = points.map(p => p.z);
}

// Function to calculate dynamic axis range
function calculateAxisRange(values) {
  if (values.length === 0) return [0, 50];
  
  const maxVal = Math.max(...values);
  const minVal = Math.min(...values, 0); // Include 0
  
  // Calculate appropriate range based on data scale
  const dataRange = maxVal - minVal;
  let rangeMin = minVal;
  let rangeMax;
  
  if (dataRange === 0) {
    // All values are the same
    rangeMin = minVal - 5;
    rangeMax = maxVal + 5;
  } else if (dataRange <= 10) {
    // Small range (e.g., 0-3, 0-10)
    rangeMax = Math.ceil(maxVal) + Math.max(2, Math.ceil(dataRange * 0.2));
  } else if (dataRange <= 100) {
    // Medium range (e.g., 0-50, 10-100)
    rangeMax = Math.ceil(maxVal / 10) * 10 + 10;
  } else if (dataRange <= 1000) {
    // Larger range (e.g., 100-500)
    rangeMax = Math.ceil(maxVal / 50) * 50 + 50;
  } else {
    // Very large range (e.g., 20000-30000)
    const magnitude = Math.pow(10, Math.floor(Math.log10(maxVal)));
    rangeMax = Math.ceil(maxVal / magnitude) * magnitude + magnitude * 0.1;
  }
  
  return [rangeMin, rangeMax];
}

// Layout configuration for the 3D plot
function getLayout() {
  const xRange = calculateAxisRange(xPoints);
  const yRange = calculateAxisRange(yPoints);
  const zRange = calculateAxisRange(zPoints);
  
  return {
    title: {
      text: "3D Scatter Plot Visualization",
      font: { size: 20, color: '#333' }
    },
    scene: {
      xaxis: {
        title: "X Axis",
        range: xRange,
        showgrid: true,
        zeroline: true,
        showline: true,
        gridcolor: "rgb(230, 230, 230)",
        gridwidth: 2
      },
      yaxis: {
        title: "Y Axis",
        range: yRange,
        showgrid: true,
        zeroline: true,
        showline: true,
        gridcolor: "rgb(230, 230, 230)",
        gridwidth: 2
      },
      zaxis: {
        title: "Z Axis",
        range: zRange,
        showgrid: true,
        zeroline: true,
        showline: true,
        gridcolor: "rgb(230, 230, 230)",
        gridwidth: 2
      }
    },
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 50,
    },
  };
}

// Function to create plane surface
function createPlane() {
  const xRange = calculateAxisRange(xPoints);
  const yRange = calculateAxisRange(yPoints);
  const zRange = calculateAxisRange(zPoints);
  
  let planeData = {};
  
  if (planeOrientation === 'xy') {
    // XY plane at fixed Z (horizontal plane)
    planeData = {
      type: 'surface',
      x: [xRange[0], xRange[1]],
      y: [yRange[0], yRange[1]],
      z: [[planePosition, planePosition], [planePosition, planePosition]],
      colorscale: [[0, 'rgba(0, 100, 200, 0.7)'], [1, 'rgba(0, 100, 200, 0.7)']], // Darker blue
      showscale: false,
      opacity: 0.8,
      hovertemplate: `XY Plane at Z=${planePosition.toFixed(1)}<extra></extra>`,
      name: 'XY Plane',
      lighting: {
        ambient: 0.9,
        diffuse: 0.8,
        specular: 0.5,
        roughness: 0.5,
        fresnel: 0.5
      },
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: "limegreen",
          project: {z: false}
        }
      }
    };
  } else if (planeOrientation === 'xz') {
    // XZ plane at fixed Y (vertical plane)
    planeData = {
      type: 'surface',
      x: [xRange[0], xRange[1]],
      y: [[planePosition, planePosition], [planePosition, planePosition]],
      z: [[zRange[0], zRange[0]], [zRange[1], zRange[1]]],
      colorscale: [[0, 'rgba(0, 100, 200, 0.7)'], [1, 'rgba(0, 100, 200, 0.7)']], // Darker blue
      showscale: false,
      opacity: 0.8,
      hovertemplate: `XZ Plane at Y=${planePosition.toFixed(1)}<extra></extra>`,
      name: 'XZ Plane',
      lighting: {
        ambient: 0.9,
        diffuse: 0.8,
        specular: 0.5,
        roughness: 0.5,
        fresnel: 0.5
      },
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: "limegreen",
          project: {z: false}
        }
      }
    };
  } else if (planeOrientation === 'yz') {
    // YZ plane at fixed X (vertical plane)
    planeData = {
      type: 'surface',
      x: [[planePosition, planePosition], [planePosition, planePosition]],
      y: [yRange[0], yRange[1]],
      z: [[zRange[0], zRange[0]], [zRange[1], zRange[1]]],
      colorscale: [[0, 'rgba(0, 100, 200, 0.7)'], [1, 'rgba(0, 100, 200, 0.7)']], // Darker blue
      showscale: false,
      opacity: 0.8,
      hovertemplate: `YZ Plane at X=${planePosition.toFixed(1)}<extra></extra>`,
      name: 'YZ Plane',
      lighting: {
        ambient: 0.9,
        diffuse: 0.8,
        specular: 0.5,
        roughness: 0.5,
        fresnel: 0.5
      },
      contours: {
        z: {
          show: true,
          usecolormap: true,
          highlightcolor: "limegreen",
          project: {z: false}
        }
      }
    };
  }
  
  return planeData;
}

// Function to update the plot with current points
function updatePlot() {
  // Determine which points to use
  const displayX = (sortAxis !== 'none' && isConnected) ? sortedXPoints : xPoints;
  const displayY = (sortAxis !== 'none' && isConnected) ? sortedYPoints : yPoints;
  const displayZ = (sortAxis !== 'none' && isConnected) ? sortedZPoints : zPoints;
  
  const trace = {
    x: displayX,
    y: displayY,
    z: displayZ,
    mode: isConnected ? "markers+lines" : "markers",
    marker: {
      size: 8,
      color: displayX.map((_, i) => `hsl(${(i * 360) / displayX.length}, 70%, 50%)`),
      line: {
        color: "rgba(0, 0, 0, 0.5)",
        width: 1,
      },
      opacity: 0.9,
    },
    line: {
      color: sortAxis !== 'none' && isConnected ? "rgb(255, 69, 0)" : "rgb(31, 119, 180)",
      width: 3
    },
    type: "scatter3d",
    name: sortAxis !== 'none' && isConnected ? `Sorted by ${sortAxis.toUpperCase()}` : "Data Points",
    text: displayX.map((x, i) => `Point<br>X: ${x}<br>Y: ${displayY[i]}<br>Z: ${displayZ[i]}`),
    hoverinfo: "text"
  };

  const data = showPlane ? [trace, createPlane()] : [trace];
  const layout = getLayout(); // Get dynamic layout
  
  // Preserve camera position
  const plotDiv = document.getElementById('myDiv');
  if (plotDiv && plotDiv.layout && plotDiv.layout.scene && plotDiv.layout.scene.camera) {
    layout.scene.camera = plotDiv.layout.scene.camera;
  }
  
  Plotly.react("myDiv", data, layout);
  
  // Update point count
  document.getElementById('pointCount').textContent = `Points plotted: ${xPoints.length}`;
}

// Function to add a new point
function addPoint() {
  const xInput = document.getElementById('xValue');
  const yInput = document.getElementById('yValue');
  const zInput = document.getElementById('zValue');
  
  const x = parseFloat(xInput.value);
  const y = parseFloat(yInput.value);
  const z = parseFloat(zInput.value);
  
  // Validate inputs
  if (isNaN(x) || isNaN(y) || isNaN(z)) {
    alert('⚠️ Please enter valid numbers for all coordinates (X, Y, and Z)!');
    return;
  }
  
  // Add point to arrays
  xPoints.push(x);
  yPoints.push(y);
  zPoints.push(z);
  
  // Save to localStorage
  savePointsToStorage();
  
  // Clear input fields
  xInput.value = '';
  yInput.value = '';
  zInput.value = '';
  
  // Focus back on first input for quick entry
  xInput.focus();
  
  // Update slider range if plane is visible
  if (showPlane) {
    updateSliderRange();
  }
  
  // Update the plot
  updatePlot();
}

// Function to reset all points
function resetPlot() {
  if (xPoints.length === 0) {
    alert('ℹ️ No points to reset!');
    return;
  }
  
  if (confirm(`🔄 Are you sure you want to remove all ${xPoints.length} points?`)) {
    xPoints = [];
    yPoints = [];
    zPoints = [];
    
    // Clear localStorage
    localStorage.removeItem('plotly3DPoints');
    
    updatePlot();
    alert('✅ All points have been cleared!');
  }
}

// Function to toggle connecting points
function toggleConnectPoints() {
  if (xPoints.length < 2) {
    alert('ℹ️ You need at least 2 points to connect!');
    return;
  }
  
  isConnected = !isConnected;
  const btn = document.getElementById('connectPoints');
  btn.textContent = isConnected ? '🔓 Disconnect Points' : '🔗 Connect Points';
  updatePlot();
}

// Function to apply sorted line connection
function applySortedLines() {
  if (xPoints.length < 2) {
    alert('ℹ️ You need at least 2 points to connect!');
    return;
  }
  
  const selectedAxis = document.getElementById('sortAxis').value;
  
  if (selectedAxis === 'none') {
    alert('📊 Please select an axis to sort by (X, Y, or Z)');
    return;
  }
  
  sortAxis = selectedAxis;
  sortPointsByAxis(sortAxis);
  isConnected = true;
  
  // Update connect button
  const btn = document.getElementById('connectPoints');
  btn.textContent = '🔓 Disconnect Points';
  
  updatePlot();
  alert(`✅ Points connected in ${sortAxis.toUpperCase()}-axis ascending order!`);
}

// Function to toggle plane visibility
function togglePlane() {
  showPlane = !showPlane;
  const btn = document.getElementById('togglePlane');
  btn.textContent = showPlane ? '❌ Hide Plane' : '✨ Show Plane';
  
  if (showPlane) {
    updateSliderRange();
  }
  
  updatePlot();
}

// Function to update plane orientation
function updatePlaneOrientation() {
  planeOrientation = document.getElementById('planeOrientation').value;
  
  // Update label text based on orientation
  const labels = {
    'xy': 'Plane Position (Z)',
    'xz': 'Plane Position (Y)',
    'yz': 'Plane Position (X)'
  };
  
  const label = document.getElementById('planeLabel');
  label.innerHTML = `${labels[planeOrientation]}: <span id="planeValue">${planePosition}</span>`;
  
  // Update slider range based on orientation
  updateSliderRange();
  
  if (showPlane) {
    updatePlot();
  }
}

// Function to update slider range based on current axis
function updateSliderRange() {
  const slider = document.getElementById('planePosition');
  let range;
  
  if (planeOrientation === 'xy') {
    range = calculateAxisRange(zPoints);
  } else if (planeOrientation === 'xz') {
    range = calculateAxisRange(yPoints);
  } else if (planeOrientation === 'yz') {
    range = calculateAxisRange(xPoints);
  }
  
  slider.min = range[0];
  slider.max = range[1];
  
  // Set position to middle if current position is out of range
  if (planePosition < range[0] || planePosition > range[1]) {
    planePosition = (range[0] + range[1]) / 2;
    slider.value = planePosition;
    document.getElementById('planeValue').textContent = planePosition.toFixed(1);
  }
}

// Function to update plane position from slider
function updatePlanePosition() {
  planePosition = parseFloat(document.getElementById('planePosition').value);
  document.getElementById('planeValue').textContent = planePosition.toFixed(1);
  
  if (showPlane) {
    updatePlot();
  }
}

// Function to smoothly animate plane to target position
function animatePlaneToPosition(targetPosition) {
  const slider = document.getElementById('planePosition');
  const startPosition = planePosition;
  const distance = targetPosition - startPosition;
  const duration = Math.min(2000, Math.abs(distance) * 20); // Duration based on distance, max 2 seconds
  const startTime = Date.now();
  
  // Cancel any existing animation
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  function animate() {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-in-out function for smooth animation
    const easeProgress = progress < 0.5 
      ? 2 * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;
    
    planePosition = startPosition + (distance * easeProgress);
    slider.value = planePosition;
    document.getElementById('planeValue').textContent = planePosition.toFixed(1);
    
    if (showPlane) {
      updatePlot();
    }
    
    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      animationFrameId = null;
    }
  }
  
  animate();
}

// Function to move plane to user-entered value
function movePlaneToValue() {
  if (!showPlane) {
    alert('ℹ️ Please show the plane first!');
    return;
  }
  
  const targetInput = document.getElementById('planeTargetValue');
  const targetValue = parseFloat(targetInput.value);
  
  if (isNaN(targetValue)) {
    alert('⚠️ Please enter a valid number!');
    return;
  }
  
  const slider = document.getElementById('planePosition');
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  
  if (targetValue < min || targetValue > max) {
    alert(`⚠️ Please enter a value between ${min.toFixed(1)} and ${max.toFixed(1)}`);
    return;
  }
  
  animatePlaneToPosition(targetValue);
  targetInput.value = '';
}

// Function to reset plane to position 0
function resetPlaneToZero() {
  if (!showPlane) {
    alert('ℹ️ Please show the plane first!');
    return;
  }
  
  const slider = document.getElementById('planePosition');
  const min = parseFloat(slider.min);
  
  if (min > 0) {
    alert(`ℹ️ The minimum position for current data is ${min.toFixed(1)}. Moving to minimum position.`);
    animatePlaneToPosition(min);
  } else {
    animatePlaneToPosition(0);
  }
}

// Event listeners
document.getElementById('addPoint').addEventListener('click', addPoint);
document.getElementById('connectPoints').addEventListener('click', toggleConnectPoints);
document.getElementById('resetPlot').addEventListener('click', resetPlot);
document.getElementById('applySortedLines').addEventListener('click', applySortedLines);
document.getElementById('togglePlane').addEventListener('click', togglePlane);
document.getElementById('planeOrientation').addEventListener('change', updatePlaneOrientation);
document.getElementById('planePosition').addEventListener('input', updatePlanePosition);
document.getElementById('movePlaneToValue').addEventListener('click', movePlaneToValue);
document.getElementById('resetPlaneToZero').addEventListener('click', resetPlaneToZero);

// Allow Enter key in plane target input
document.getElementById('planeTargetValue').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') movePlaneToValue();
});

// Allow Enter key to add point when in input fields
document.getElementById('xValue').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addPoint();
});
document.getElementById('yValue').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addPoint();
});
document.getElementById('zValue').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addPoint();
});

// Load saved points and initialize plot
loadPointsFromStorage();
updatePlot();
