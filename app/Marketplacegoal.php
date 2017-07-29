<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marketplacegoal extends Model
{
    public function markettask() {
   return $this->hasMany('\App\Markettask');
    }
       public function review() {
      return $this->hasMany('\App\Review');
    }
}
