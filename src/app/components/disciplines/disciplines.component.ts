import { Component, ViewChild, Output, OnInit, Type, EventEmitter, HostListener, Renderer2,ElementRef, Input } from '@angular/core';
import { NguiInfiniteListDirective } from '@ngui/infinite-list';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../services/shared.service';
import { User } from '../../models/user';

@Component({
  selector: 'fp-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})
export class DisciplinesComponent implements OnInit {

  specializations = [
    {name: "Computer Science and Software", tag: 10, checked: true},
    {name: "Information Systems", tag: 11, checked: true},
    {name: "Automation and Control", tag: 12, checked: true}
  ]
  studyYears = [
    {name: "First Course", tag: 13, checked: true},
    {name: "Second Course", tag: 14, checked: false},
    {name: "Third Course", tag: 15, checked: false},
    {name: "Fourth Course", tag: 16, checked: false},
  ]
  yearTag: number = 13;

  posts: Post[] = [];
  user: User;
  curPage: number;
  tag: number = null;
  destURL: string = "disciplines";

  @ViewChild(NguiInfiniteListDirective)
  private infScrollComponent: NguiInfiniteListDirective;

  @HostListener('window:scroll', ['$event']) 
    scrolled(event) {
      this.infScrollComponent.scrollListener()
    }

  constructor(
  private postService: PostService,
  private route: ActivatedRoute,
  private _renderer: Renderer2,
  private _elementRef: ElementRef,
  private sharedService: SharedService) {
    this.user = JSON.parse(localStorage.getItem('currentUser'))
  }

  ngOnInit() {
    this.posts = []
    this.curPage = 1
    this._renderer.listen(this._elementRef.nativeElement.parentNode, 
    'scroll', (event) => {
      this.scrolled(event)
    });
  }

  postIsLiked(post: Post): boolean {
    if (this.user) {
      return post.likes.find(like => like.author.username==this.user.username) != undefined
    } else {
      return false
    }
  }

  likedPost(postID: number) {
    if (!this.user) return;
    var post = this.posts.find(post => post.id == postID)
    var like = post.likes.find(like => like.author.username==this.user.username);
    if (like) {
      this.postService.postLiked(postID);
      post.likes = post.likes.filter(like => like.author.username!=this.user.username);
      post.isLiked = false;
    } else {
      this.postService.postLiked(postID);
      post.likes.push({'author': this.user})
      post.isLiked = true;
    }
  }

    set1: any = {
      endOfList: false, loadingInProgress: false
    };

    buildTagArray(): number[] {
      let res = [this.yearTag];
      
      this.specializations
          .filter(spec => spec.checked)
          .forEach(spec => res.push(spec.tag))
      
      return res
    }

    loadMore(data: any): void {
        if (!data.endOfList && !data.loadingInProgress) {        
          data.loadingInProgress = true;
          var postRequest : any = null;
          postRequest = this.postService.getPostsByTags(this.curPage, this.buildTagArray());
          postRequest.subscribe(postsOnPage => {
              var posts: Post[]
              posts = postsOnPage['results'].map(element => element['post']);
              posts.forEach(post => {
              post.isLiked = this.postIsLiked(post);
              post.image = post.image;
              this.posts.push(post)
            });
            if (!postsOnPage["next"]) {
              data.endOfList = true;
            } else {
              this.curPage += 1;
            }
            data.loadingInProgress = false;
            })
          
        }
      }
      onChange(tag:number) {        
        this.posts = [];
        this.curPage = 1;
        this.set1.loadingInProgress = false;
        this.set1.endOfList = false;        
        this.loadMore(this.set1);
      }
      showPostAuthorProfile(post: Post) {
        this.sharedService.showUserProfile(post.author)
      }
}
