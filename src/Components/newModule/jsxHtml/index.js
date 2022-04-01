import React from 'react';
import './style.css';
import fabric from 'fabric';
import $ from 'jquery';
import jspdf from 'jspdf';
import pdfjsLib  from 'build/pdf.js';
import pdfjs  from 'node_modules\pdfjs-dist\webpack.js';



function PDFEditor() {

  var PDFAnnotate = function (container_id, url, options = {}) {
    this.number_of_pages = 0;
    this.pages_rendered = 0;
    this.active_tool = 1; // 1 - Free hand, 2 - Text, 3 - Arrow, 4 - Rectangle
    this.fabricObjects = [];
    this.fabricObjectsData = [];
    this.color = "#212121";
    this.borderColor = "#000000";
    this.borderSize = 1;
    this.font_size = 16;
    this.active_canvas = 0;
    this.container_id = container_id;
    this.url = url;
    this.pageImageCompression = options.pageImageCompression
      ? options.pageImageCompression.toUpperCase()
      : "NONE";
    var inst = this;

    var loadingTask = pdfjs.getDocument(this.url);
    console.log("loadingTask : ",loadingTask)
    
    loadingTask?.promise.then(
      function (pdf) {
        var scale = options.scale ? options.scale : 1.3;
        inst.number_of_pages = pdf.numPages;

        for (var i = 1; i <= pdf.numPages; i++) {
          pdf.getPage(i).then(function (page) {
            var viewport = page.getViewport({ scale: scale });
            var canvas = document.createElement("canvas");
            document.getElementById(inst.container_id).appendChild(canvas);
            canvas.className = "pdf-canvas";
            canvas.height = viewport.height;
            canvas.width = viewport.width;
           var context = canvas.getContext("2d");

            var renderContext = {
              canvasContext: context,
              viewport: viewport,
            };
            var renderTask = page.render(renderContext);
            renderTask?.promise.then(function () {
              $(".pdf-canvas").each(function (index, el) {
                $(el).attr("id", "page-" + (index + 1) + "-canvas");
              });
              inst.pages_rendered++;
              if (inst.pages_rendered == inst.number_of_pages)
                inst.initFabric();
            });
          });
        }
      },
      function (reason) {
        console.error(reason);
      }
    );
  };

  

  var pdf = new PDFAnnotate("pdf-container", "mypdf.pdf", {
    onPageUpdated(page, oldData, newData) {
      console.log(page, oldData, newData);
    },
    ready() {
      console.log("Plugin initialized successfully");
    },
    scale: 1.5,
    pageImageCompression: "MEDIUM", // FAST, MEDIUM, SLOW(Helps to control the new PDF file size)
  });

  
  return (
    <div>
    <div className="toolbar">
      <div className="tool">
        <span>PDFJS + FabricJS + jsPDF</span>
      </div>
      <div className="tool">
        <label>Brush size</label>
        <input type="number" className="form-control text-right" defaultValue={1} id="brush-size" max={50} />
      </div>
      <div className="tool">
        <label>Font size</label>
        <select id="font-size" className="form-control">
          <option value={10}>10</option>
          <option value={12}>12</option>
          <option value={16} defaultValue>16</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
          <option value={32}>32</option>
          <option value={48}>48</option>
          <option value={64}>64</option>
          <option value={72}>72</option>
          <option value={108}>108</option>
        </select>
      </div>
      <div className="tool">
        <button className="color-tool active" style={{backgroundColor: '#212121'}} />
        <button className="color-tool" style={{backgroundColor: 'red'}} />
        <button className="color-tool" style={{backgroundColor: 'blue'}} />
        <button className="color-tool" style={{backgroundColor: 'green'}} />
        <button className="color-tool" style={{backgroundColor: 'yellow'}} />
      </div>

      <div className="tool">
        <button className="tool-button active">
          <i className="fa fa-hand-paper-o" title="Free Hand"  />
        </button>
      </div>
      <div className="tool">
        <button className="tool-button">
          <i className="fa fa-pencil" title="Pencil"  />
        </button>
      </div>
      <div className="tool">
        <button className="tool-button">
          <i className="fa fa-font" title="Add Text" />
        </button>
      </div>
      <div className="tool">
        <button className="tool-button">
          <i className="fa fa-long-arrow-right" title="Add Arrow"  />
        </button>
      </div>
      <div className="tool">
        <button className="tool-button">
          <i className="fa fa-square-o" title="Add rectangle"  />
        </button>
      </div>
      <div className="tool">
        <button className="tool-button">
          <i className="fa fa-picture-o" title="Add an Image"  />
        </button>
      </div>
      <div className="tool">
        <button className="btn btn-danger btn-sm" >
          <i className="fa fa-trash" />
        </button>
      </div>
      <div className="tool">
        <button className="btn btn-danger btn-sm" >
        Clear Page
        </button>
      </div>
      <div className="tool">
        <button className="btn btn-info btn-sm" >{'{'}{'}'}</button>
      </div>
      <div className="tool">
        <button className="btn btn-light btn-sm" >
        <i className="fa fa-save" /> Save
        </button>
      </div>
    </div>



    <div id="pdf-container" >
    </div>
   
   
   
   
    <div className="modal fade" id="dataModal" tabIndex={-1} role="dialog" aria-labelledby="dataModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="dataModalLabel">PDF annotation data</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <pre className="prettyprint lang-json linenums" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PDFEditor