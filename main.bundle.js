(()=>{"use strict";const t=function(){function t(t){this.interval=1,this.options={cellsX:100,cellsY:100,cellSize:10,gridColor:"#3730a3",cellColor:"#ccc"},this.canvas=document.getElementById(t),this.ctx=this.canvas.getContext("2d");var i=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),o=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);console.log(i,o),this.options.cellsX=Math.floor(i/this.options.cellSize),this.options.cellsY=Math.floor(o/this.options.cellSize),console.log(this.options.cellsX),this.update()}return t.prototype.update=function(){var t=this;this.canvas.width=this.options.cellsX*this.options.cellSize,this.canvas.height=this.options.cellsY*this.options.cellSize,this.matrix=new Array(this.options.cellsX);for(var i=0;i<this.matrix.length;i++){this.matrix[i]=new Array(this.options.cellsY);for(var o=0;o<this.matrix[i].length;o++)this.matrix[i][o]=!1}this.randomize(),setInterval((function(){t.step(),t.draw()}),this.interval)},t.prototype.step=function(){var t,i,o=new Array(this.matrix.length);for(t=0;t<o.length;t++)o[t]=new Array(this.matrix[t].length);for(t=0;t<this.matrix.length;t++)for(i=0;i<this.matrix[t].length;i++){var s=this.countNeighbours(t,i);this.matrix[t][i]?(2!=s&&3!=s||(o[t][i]=!0),(s<2||s>3)&&(o[t][i]=!1)):3==s&&(o[t][i]=!0)}this.matrix=o},t.prototype.draw=function(){this.canvas.width=this.canvas.width,this.ctx.strokeStyle=this.options.gridColor,this.ctx.fillStyle=this.options.cellColor;for(var t=.5;t<this.options.cellsX*this.options.cellSize;t+=this.options.cellSize)this.ctx.moveTo(t,0),this.ctx.lineTo(t,this.options.cellsY*this.options.cellSize);for(var i=.5;i<this.options.cellsY*this.options.cellSize;i+=this.options.cellSize)this.ctx.moveTo(0,i),this.ctx.lineTo(this.options.cellsX*this.options.cellSize,i);for(this.ctx.stroke(),t=0;t<this.matrix.length;t++)for(i=0;i<this.matrix[t].length;i++)this.matrix[t][i]&&this.ctx.fillRect(t*this.options.cellSize+1,i*this.options.cellSize+1,this.options.cellSize-1,this.options.cellSize-1)},t.prototype.countNeighbours=function(t,i){for(var o=0,s=t-1;s<=t+1;s++)for(var e=i-1;e<=i+1;e++)s==t&&e==i||s<0||s>=this.matrix.length||e<0||e>=this.matrix[s].length||this.matrix[s][e]&&o++;return o},t.prototype.randomize=function(){for(var t=0;t<this.matrix.length;t++)for(var i=0;i<this.matrix[t].length;i++)this.matrix[t][i]=Math.random()<.3},t}();console.log("test"),new t("gol-canvas")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWVyc2VuLy4vc3JjL3NjcmlwdHMvZ29sLnRzIiwid2VicGFjazovL2x1ZXJzZW4vLi9zcmMvc2NyaXB0cy9tYWluLnRzIl0sIm5hbWVzIjpbImNhbnZhc0lkIiwiaW50ZXJ2YWwiLCJvcHRpb25zIiwiY2VsbHNYIiwiY2VsbHNZIiwiY2VsbFNpemUiLCJncmlkQ29sb3IiLCJjZWxsQ29sb3IiLCJ0aGlzIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJ2dyIsIk1hdGgiLCJtYXgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ2aCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiY29uc29sZSIsImxvZyIsImZsb29yIiwidXBkYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXRyaXgiLCJBcnJheSIsIngiLCJsZW5ndGgiLCJ5IiwicmFuZG9taXplIiwic2V0SW50ZXJ2YWwiLCJzdGVwIiwiZHJhdyIsImJ1ZmZlciIsIm5laWdoYm91cnMiLCJjb3VudE5laWdoYm91cnMiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZpbGxSZWN0IiwiY3giLCJjeSIsImNvdW50IiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiMkJBQUEsV0FnQkksV0FBWUEsR0FmSixLQUFBQyxTQUFtQixFQUtuQixLQUFBQyxRQUFVLENBQ2RDLE9BQVEsSUFDUkMsT0FBUSxJQUNSQyxTQUFVLEdBQ1ZDLFVBQVcsVUFDWEMsVUFBVyxRQU1YQyxLQUFLQyxPQUE0QkMsU0FBU0MsZUFBZVgsR0FDekRRLEtBQUtJLElBQU1KLEtBQUtDLE9BQU9JLFdBQVcsTUFFbEMsSUFBTUMsRUFBS0MsS0FBS0MsSUFBSU4sU0FBU08sZ0JBQWdCQyxhQUFlLEVBQUdDLE9BQU9DLFlBQWMsR0FDOUVDLEVBQUtOLEtBQUtDLElB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QUtzQixPQUFPRSxHQUFHRSxJQUNmMUIsS0FBS0ksSUFBSW1DLFNBQVNmLEVBQUl4QixLQUFLTixRQUFRRyxTQUFXLEVBQzFDNkIsRUFBSTFCLEtBQUtOLFFBQVFHLFNBQVcsRUFDNUJHLEtBQUtOLFFBQVFHLFNBQVcsRUFDeEJHLEtBQUtOLFFBQVFHLFNBQVcsSUFNcEMsWUFBQW9DLGdCQUFSLFNBQXdCTyxFQUFZQyxHQUdoQyxJQUZBLElBQUlDLEVBQVEsRUFFSGxCLEVBQUlnQixFQUFLLEVBQUdoQixHQUFLZ0IsRUFBSyxFQUFHaEIsSUFDOUIsSUFBSyxJQUFJRSxFQUFJZSxFQUFLLEVBQUdmLEdBQUtlLEVBQUssRUFBR2YsSUFDMUJGLEdBQUtnQixHQUFNZCxHQUFLZSxHQUVoQmpCLEVBQUksR0FBS0EsR0FBS3hCLEtBQUtzQixPQUFPRyxRQUFVQyxFQUFJLEdBQUtBLEdBQUsxQixLQUFLc0IsT0FBT0UsR0FBR0MsUUFFakV6QixLQUFLc0IsT0FBT0UsR0FBR0UsSUFDZmdCLElBR1osT0FBT0EsR0FHSCxZQUFBZixVQUFSLFdBQ0ksSUFBSyxJQUFJSCxFQUFJLEVBQUdBLEVBQUl4QixLQUFLc0IsT0FBT0csT0FBUUQsSUFDcEMsSUFBSyxJQUFJRSxFQUFJLEVBQUdBLEVBQUkxQixLQUFLc0IsT0FBT0UsR0FBR0MsT0FBUUMsSUFDdkMxQixLQUFLc0IsT0FBT0UsR0FBR0UsR0FBS25CLEtBQUtvQyxTQUFXLElBSXBELEVBdklBLEdDSUEzQixRQUFRQyxJQUFJLFFBQ0MsSUFBSSxFQUFLLGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWw6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbiAgICBwcml2YXRlIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgY2VsbHNYOiAxMDAsXHJcbiAgICAgICAgY2VsbHNZOiAxMDAsXHJcbiAgICAgICAgY2VsbFNpemU6IDEwLFxyXG4gICAgICAgIGdyaWRDb2xvcjogXCIjMzczMGEzXCIsXHJcbiAgICAgICAgY2VsbENvbG9yOiBcIiNjY2NcIlxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIG1hdHJpeDogQXJyYXk8QXJyYXk8Ym9vbGVhbj4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNJZCk7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHZ3ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8IDAsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApXHJcbiAgICAgICAgY29uc3QgdmggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IDAsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZ3LCB2aCk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNlbGxzWCA9IE1hdGguZmxvb3IodncgLyB0aGlzLm9wdGlvbnMuY2VsbFNpemUpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jZWxsc1kgPSBNYXRoLmZsb29yKHZoIC8gdGhpcy5vcHRpb25zLmNlbGxTaXplKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9wdGlvbnMuY2VsbHNYKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5vcHRpb25zLmNlbGxzWCAqIHRoaXMub3B0aW9ucy5jZWxsU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMuY2VsbHNZICogdGhpcy5vcHRpb25zLmNlbGxTaXplO1xyXG5cclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG5ldyBBcnJheSh0aGlzLm9wdGlvbnMuY2VsbHNYKTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMubWF0cml4Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF0cml4W3hdID0gbmV3IEFycmF5KHRoaXMub3B0aW9ucy5jZWxsc1kpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMubWF0cml4W3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdHJpeFt4XVt5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZSgpO1xyXG5cclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfSwgdGhpcy5pbnRlcnZhbCk7XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGVwKCkge1xyXG4gICAgICAgIHZhciB4LCB5O1xyXG4gICAgICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXkodGhpcy5tYXRyaXgubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKHggPSAwOyB4IDwgYnVmZmVyLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlclt4XSA9IG5ldyBBcnJheSh0aGlzLm1hdHJpeFt4XS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIG9uZSBzdGVwXHJcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHRoaXMubWF0cml4Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAoeSA9IDA7IHkgPCB0aGlzLm1hdHJpeFt4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gY291bnQgbmVpZ2hib3Vyc1xyXG4gICAgICAgICAgICAgICAgdmFyIG5laWdoYm91cnMgPSB0aGlzLmNvdW50TmVpZ2hib3Vycyh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB1c2UgcnVsZXNcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFt4XVt5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvdXJzID09IDIgfHwgbmVpZ2hib3VycyA9PSAzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXJbeF1beV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvdXJzIDwgMiB8fCBuZWlnaGJvdXJzID4gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyW3hdW3ldID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvdXJzID09IDMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlclt4XVt5XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZsaXAgYnVmZmVyc1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhdygpIHtcclxuICAgICAgICAvLyBjbGVhciBjYW52YXMgYW5kIHNldCBjb2xvcnNcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5vcHRpb25zLmdyaWRDb2xvcjtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLm9wdGlvbnMuY2VsbENvbG9yO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGdyaWRcclxuICAgICAgICBmb3IgKGxldCB4ID0gMC41OyB4IDwgdGhpcy5vcHRpb25zLmNlbGxzWCAqIHRoaXMub3B0aW9ucy5jZWxsU2l6ZTsgeCArPSB0aGlzLm9wdGlvbnMuY2VsbFNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIDApO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgdGhpcy5vcHRpb25zLmNlbGxzWSAqIHRoaXMub3B0aW9ucy5jZWxsU2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCB5ID0gMC41OyB5IDwgdGhpcy5vcHRpb25zLmNlbGxzWSAqIHRoaXMub3B0aW9ucy5jZWxsU2l6ZTsgeSArPSB0aGlzLm9wdGlvbnMuY2VsbFNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHgubW92ZVRvKDAsIHkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5vcHRpb25zLmNlbGxzWCAqIHRoaXMub3B0aW9ucy5jZWxsU2l6ZSwgeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBtYXRyaXhcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubWF0cml4Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXRyaXhbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFt4XVt5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggKiB0aGlzLm9wdGlvbnMuY2VsbFNpemUgKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICogdGhpcy5vcHRpb25zLmNlbGxTaXplICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNlbGxTaXplIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNlbGxTaXplIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudE5laWdoYm91cnMoY3g6IG51bWJlciwgY3k6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAodmFyIHggPSBjeCAtIDE7IHggPD0gY3ggKyAxOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IGN5IC0gMTsgeSA8PSBjeSArIDE7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHggPT0gY3ggJiYgeSA9PSBjeSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICh4IDwgMCB8fCB4ID49IHRoaXMubWF0cml4Lmxlbmd0aCB8fCB5IDwgMCB8fCB5ID49IHRoaXMubWF0cml4W3hdLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpeFt4XVt5XSlcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRvbWl6ZSgpIHtcclxuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMubWF0cml4Lmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5tYXRyaXhbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0cml4W3hdW3ldID0gTWF0aC5yYW5kb20oKSA8IDAuMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nb2xcIjtcclxuXHJcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiXHJcblxyXG5jb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShcImdvbC1jYW52YXNcIik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=