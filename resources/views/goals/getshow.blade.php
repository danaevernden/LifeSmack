@extends('master')

    @section('content')

    <div class='projects'>


 want to add in $goal->goal_name but it is erroring out -->
<b>
@foreach($goals as $goal)
      {{$goal->goal_name}}
@endforeach
</b><br><br>
      @foreach($tasks as $task)
        <div onclick="taskmenu()">  {{$task->task_name}} </div>
        <div id="editmenu" class="hidden"> edit menu here </div>
          <br>
          {{$task->task_due_date}}
          <br>
          {{$task->priority_id}}
          <br>
          <input type='hidden' name='id' value='{{ $task->id }}'>
          <a href='/account/edit/{{$task->id}}' class="button">Edit</a>
          <br>
          <!-- find out if query via ajax should be performed to retrieve this comment, or just use js to hide and show it-->
          <b>Comments:</b>
          <br>
          @foreach($comments as $comment)
          @if($comment->task_id == $task->id)
          {{$comment->comment_text}}
          @endif
          @endforeach
          <br><hr class='greyline'><br>
      @endforeach

      <!--moved notes to account page-->
    </div>
    @stop

<!-- add dropdown menu for:
- duplicate
- schedule
- comment
- delete
- add task above/below
- prioritize low med high
- move to "add later" list

* click box on left to complete

* click and drag to move task order
-->
