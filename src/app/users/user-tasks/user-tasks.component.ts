import { Component, inject ,input,computed, OnInit, DestroyRef} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports : [RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {

  //userId = input.required<string>();
  userName = '';
  private activatedRoute = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  private destroyRef  = inject(DestroyRef);
  // userName = computed(
  //   ()=>this.usersService.users.find((x)=>x.id === this.userId())?.name
  // );

  ngOnInit(): void {
    console.log(this.activatedRoute);
    debugger;
    const subscription = this.activatedRoute.paramMap.subscribe({
      next : (x)=>{
        this.userName = this.usersService.users
        .find((u)=>u.id === x.get('userId'))?.name || '';
      },
      });

    this.destroyRef.onDestroy(()=>subscription.unsubscribe());
  }  

  //this is from kkk
}
