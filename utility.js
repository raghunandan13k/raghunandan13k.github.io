  function getImgData(chartContainer) {
    var chartArea = chartContainer.getElementsByTagName('iframe')[0].contentDocument.getElementById('chartArea');
    var svg = chartArea.innerHTML;
    var doc = chartContainer.ownerDocument;
    var canvas = doc.createElement('canvas');
    canvas.setAttribute('width', chartArea.offsetWidth);
    canvas.setAttribute('height', chartArea.offsetHeight);
        
        
    canvas.setAttribute(
        'style',
        'position: absolute; ' +
        'top: ' + (-chartArea.offsetHeight * 2) + 'px;' +
        'left: ' + (-chartArea.offsetWidth * 2) + 'px;');
    doc.body.appendChild(canvas);
    canvg(canvas, svg);
    var imgData = canvas.toDataURL('image/png');
    canvas.parentNode.removeChild(canvas);
    return imgData;
  }
     
  function saveAsImg(chartContainer) {
    var imgData = getImgData(chartContainer);
    // Replacing the mime-type will force the browser to trigger a download
    // rather than displaying the image in the browser window.
    window.location = imgData.replace('image/png', 'image/octet-stream');
  }
