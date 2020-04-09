import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ImageTile } from '../models';

@Component({
  selector: 'app-image-tiles',
  templateUrl: './image-tiles.component.html',
  styleUrls: ['./image-tiles.component.css']
})
export class ImageTilesComponent implements OnInit, AfterViewInit {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private tileCountX = 3;
  private canvasSize: number;

  constructor() {}

  ngOnInit(): void {
    this.canvasSize = 540;
  }

  ngAfterViewInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.width = `${this.canvasSize}px`;
    this.canvas.style.height = `${this.canvasSize}px`;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }

  upload(files: FileList): void {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result.toString();
      img.onload = () => {
        //start
        const tiles = this.getTiles(img);
        this.drawTiles(tiles);
      };
    };
  }
  getTiles(img: HTMLImageElement): ImageTile[] {
    if (img.width < this.canvasSize || img.height < this.canvasSize) {
      throw new Error('Image Size too small.');
    }

    const imgData = this.resizeImage(img, this.canvasSize, this.canvasSize);
    const imgSize =
      imgData.width > imgData.height ? imgData.height : imgData.width;
    const pixelRows = [];
    const data = Array.from(imgData.data);
    while (data.length > 0) {
      pixelRows.push(data.splice(0, imgData.width * 4));
    }
    const tiles: ImageTile[] = [];
    const tileSize = ~~(imgSize / this.tileCountX);
    for (let i = 0; i < this.tileCountX * this.tileCountX; i++) {
      const x = i % this.tileCountX;
      const y = ~~(i / this.tileCountX);
      let tileDataRows: any[] = [];
      for (let row = y * tileSize; row < tileSize * (y + 1); row++) {
        tileDataRows = tileDataRows.concat(
          pixelRows[row].slice(tileSize * x * 4, tileSize * (x + 1) * 4)
        );
      }
      tiles.push(<ImageTile>{
        id: i,
        x: i % this.tileCountX,
        y: ~~(i / this.tileCountX),
        data: new Uint8ClampedArray(tileDataRows)
      });
    }

    return tiles;
  }
  drawTiles(tiles: ImageTile[]) {
    const offset = 1;
    for (const tile of tiles) {
      this.ctx.putImageData(
        new ImageData(
          tile.data,
          this.canvasSize / this.tileCountX,
          this.canvasSize / this.tileCountX
        ),
        tile.x * 180 * offset,
        tile.y * 180 * offset
      );
    }
  }

  resizeImage(
    img: HTMLImageElement,
    width: number = 1080,
    height: number = 1080
  ): ImageData {
    if (img.height < img.width) {
      width = Math.floor(height * (img.width / img.height));
    } else {
      height = Math.floor(width * (img.height / img.width));
    }
    let resizingCanvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.createElement('canvas')
    );
    let resizingCanvasContext = resizingCanvas.getContext('2d');
    resizingCanvas.width = img.width;
    resizingCanvas.height = img.height;
    resizingCanvasContext.drawImage(
      img,
      0,
      0,
      resizingCanvas.width,
      resizingCanvas.height
    );
    let curImageDimensions = {
      width: Math.floor(img.width),
      height: Math.floor(img.height)
    };

    let halfImageDimensions = {
      width: null,
      height: null
    };
    while (curImageDimensions.width * 0.5 > width) {
      // Reduce the resizing canvas by half and refresh the image
      halfImageDimensions.width = Math.floor(curImageDimensions.width * 0.5);
      halfImageDimensions.height = Math.floor(curImageDimensions.height * 0.5);

      resizingCanvasContext.drawImage(
        resizingCanvas,
        0,
        0,
        curImageDimensions.width,
        curImageDimensions.height,
        0,
        0,
        halfImageDimensions.width,
        halfImageDimensions.height
      );

      curImageDimensions.width = halfImageDimensions.width;
      curImageDimensions.height = halfImageDimensions.height;
    }
    let outputCanvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.createElement('canvas')
    );
    let outputCanvasContext = outputCanvas.getContext('2d');

    outputCanvas.width = width;
    outputCanvas.height = height;

    outputCanvasContext.drawImage(
      resizingCanvas,
      0,
      0,
      curImageDimensions.width,
      curImageDimensions.height,
      0,
      0,
      width,
      height
    );
    const imageData = outputCanvasContext.getImageData(0, 0, width, height);
    // outputCanvasContext.clearRect(0, 0, outputCanvas.width, outputCanvas.height);
    return imageData;
  }
}
