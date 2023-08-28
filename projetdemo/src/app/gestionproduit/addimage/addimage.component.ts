import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addimage',
  templateUrl: './addimage.component.html',
  styleUrls: ['./addimage.component.css']
})
export class AddimageComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {
    
  }
  onFileChange(event: any) {
    const selectedFile: File = event.target.files[0];

    if (selectedFile) {
      console.log('Selected file:', selectedFile.name);
      // You can now use the selected file
    }
  }

  selectFile() {
    // Trigger file input click event
    document.getElementById('fileInput')?.click();
  }
}
