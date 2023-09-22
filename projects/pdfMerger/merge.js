const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (pdf1, pdf2) => {      
  await merger.add(pdf1);  //merge all pages. parameter is the path to file and filename.
    await merger.add(pdf2); // merge only page 2
    
    let d = new Date().getTime();
    await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
    return d;

};

module.exports ={mergePdfs};