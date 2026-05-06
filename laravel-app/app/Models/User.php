<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'USERS';
    protected $primaryKey = 'USER_ID';
    public $timestamps = false;

    protected $fillable = [
        'NAME',
        'EMAIL',
        'PASSWORD',
        'ROLE',
    ];

    protected $hidden = [
        'PASSWORD',
    ];
}