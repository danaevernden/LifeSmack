<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Markettask extends Model
{
  public function marketplacegoal() {
  return $this->belongsTo('\App\Marketplacegoal');
  }

}
