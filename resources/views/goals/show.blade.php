@extends('master')

    @section('content')
<div class='projects'>
    <b>Current Projects</b><br>


    <div class='checklists'>
        <b>Checklists</b>
        <br>
        - Errands
        <br>
        - To do on computer
    </div>
</div>

<!--
add dropdown menu for:
-sort tasks by name, date, priority
-toggle viewing completed/archived tasks
-define parent project, look at child projects


later:
- option to add notes, pictures, links, different types of lists: compare lists, pro/con lists, wish list, to do list
-->
<!--

!!!!!!!!!!!!!!!!!!!!!!add this section if not logged in!!!!!!!!!!!!!!!!
Everyone has goals in life.<br>
What are yours?
<br>
<a href="/goals/create">Create new goal</a> or <a href="/goaltemplates">browse goal templates</a>.

-->
    @stop
