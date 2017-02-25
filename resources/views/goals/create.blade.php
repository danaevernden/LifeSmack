@extends('master')

    @section('content')
    <form method='POST' action='/books/create'>
        <input type='hidden' name='_token' value='{{ csrf_token() }}'>
        Goal Name
        <input type='text' name='GoalName'><br>
        Will your goal have a due date?
        <input type='text' name='GoalHasDueDate'><br>
        What is your goal's due date?
        <input type='text' name='DueDate'><br>
        What do you need to do to complete your goal?
        <input type='text' name='Tasks'><br>
        What area of your life is this goal addressing?
        <input type='text' name='LifeArea'><br>
        <input type='submit' value='Create Goal'>
    </form>
    @stop
