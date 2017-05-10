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
    {name: "Computer Science and Software", tag: 0, checked: true},
    {name: "Information Systems", tag: 0, checked: true},
    {name: "Automation and Control", tag: 0, checked: true}
  ]
  studyYear = [
    "First Course",
    "Second Course",
    "Third Course",
    "Fourth Course"
  ]

  posts: Post[];
  user: User;
  curPage: number;
  tag: number = null;

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
      return []
    }

    loadMore(data: any): void {
      if (!data.endOfList && !data.loadingInProgress) {
          data.loadingInProgress = true;
          var postRequest : any = null;
          postRequest = this.postService.getPostsByTags(this.curPage, this.buildTagArray());
          postRequest.subscribe(postsOnPage => {
              var posts: Post[]
              if(this.tag != null){
                posts = postsOnPage['results'].map(element => element['post']);
              }
              else{
                posts = postsOnPage['results'];
              }
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
      showPostAuthorProfile(post: Post) {
        this.sharedService.showUserProfile(post.author)
      }
}
