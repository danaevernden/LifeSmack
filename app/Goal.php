<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
  public function task() {
 return $this->hasMany('\App\Task');
  }
}
