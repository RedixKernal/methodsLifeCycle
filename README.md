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



    <div id="pdf-container" ></div>
   
   
   
   
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


  // <div>
    //   <div className="toolbar">
    //     <div className="tool">
    //       <span>PDFJS + FabricJS + jsPDF</span>
    //     </div>
    //     <div className="tool">
    //       <label>Brush size</label>
    //       <input type="number" className="form-control text-right" defaultValue={1} id="brush-size" max={50} />
    //     </div>
    //     <div className="tool">
    //       <label>Font size</label>
    //       <select id="font-size" className="form-control">
    //         <option value={10}>10</option>
    //         <option value={12}>12</option>
    //         <option value={16} defaultValue>16</option>
    //         <option value={18}>18</option>
    //         <option value={24}>24</option>
    //         <option value={32}>32</option>
    //         <option value={48}>48</option>
    //         <option value={64}>64</option>
    //         <option value={72}>72</option>
    //         <option value={108}>108</option>
    //       </select>
    //     </div>
    //     <div className="tool">
    //       <button className="color-tool active" style={{backgroundColor: '#212121'}} />
    //       <button className="color-tool" style={{backgroundColor: 'red'}} />
    //       <button className="color-tool" style={{backgroundColor: 'blue'}} />
    //       <button className="color-tool" style={{backgroundColor: 'green'}} />
    //       <button className="color-tool" style={{backgroundColor: 'yellow'}} />
    //     </div>

    //     <div className="tool">
    //       <button className="tool-button active">
    //         <i className="fa fa-hand-paper-o" title="Free Hand" onClick={(event) =>{enableSelector(event)}} />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="tool-button">
    //         <i className="fa fa-pencil" title="Pencil" onClick={(event) =>{enablePencil(event)}} />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="tool-button">
    //         <i className="fa fa-font" title="Add Text" onClick={(event) =>{enableAddText(event)} }/>
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="tool-button">
    //         <i className="fa fa-long-arrow-right" title="Add Arrow" onClick={(event) =>{enableAddArrow(event)}} />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="tool-button">
    //         <i className="fa fa-square-o" title="Add rectangle" onClick={(event) =>{enableRectangle(event)}} />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="tool-button">
    //         <i className="fa fa-picture-o" title="Add an Image" onClick={(event) =>{addImage(event)}} />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="btn btn-danger btn-sm" onClick={(event) =>{deleteSelectedObject(event)}}>
    //         <i className="fa fa-trash" />
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="btn btn-danger btn-sm" onClick={() =>{clearPage()}}>
    //       Clear Page
    //       </button>
    //     </div>
    //     <div className="tool">
    //       <button className="btn btn-info btn-sm" onClick={() =>{showPdfData()}}>{'{'}{'}'}</button>
    //     </div>
    //     <div className="tool">
    //       <button className="btn btn-light btn-sm" onClick={(event) =>{savePDF()}}>
    //       <i className="fa fa-save" /> Save
    //       </button>
    //     </div>
    //   </div>



    //   <div id="pdf-container" ></div>
     
     
     
     
    //   <div className="modal fade" id="dataModal" tabIndex={-1} role="dialog" aria-labelledby="dataModalLabel" aria-hidden="true">
    //     <div className="modal-dialog modal-lg" role="document">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="dataModalLabel">PDF annotation data</h5>
    //           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //             <span aria-hidden="true">×</span>
    //           </button>
    //         </div>
    //         <div className="modal-body">
    //           <pre className="prettyprint lang-json linenums" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>