<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
  public function goal() {
  return $this->belongsTo('\App\Goal');
  }
  public function comment() {
 return $this->hasMany('\App\Comment');
  }
}
