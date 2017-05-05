import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/post";

@Component({
  selector: 'fp-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  @Input() postForm:FormGroup;
  currentUser: any;
  constructor(private fb:FormBuilder, private postService: PostService) {     
  }

  ngOnInit() {
    this.BuildForm();    
  }
  private BuildForm() {    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.postForm = this.fb.group({  
      title: '',
      shortDescrp: '',
      content: '',      
    });
  }
  onSubmit() {
    const form = this.postForm.value;
    this.postForm.reset();
    const post: Post = {
      id: 0,
      title: form.title,
      short_description: form.shortDescrp,
      content: form.content,
      comments: [],
      author: this.currentUser.username,
      image: '',
      isLiked: false,
      keywords: [],
      likes: [],
      publish_date: new Date().toDateString()
    }
    this.postService.createPost(post);
    console.log(post);
  }
}
