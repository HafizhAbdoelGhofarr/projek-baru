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

    // Mapping kolom kapital ke yang diharapkan Laravel Auth
    public function getAuthIdentifierName()
    {
        return 'USER_ID';
    }

    public function getAuthPassword()
    {
        return $this->PASSWORD;
    }

    public function getEmailForPasswordReset()
    {
        return $this->EMAIL;
    }

    // Kirim data ke frontend dengan format lowercase
    public function toArray()
    {
        return [
            'id'                => $this->USER_ID,
            'name'              => $this->NAME,
            'email'             => $this->EMAIL,
            'role'              => $this->ROLE,
            'avatar'            => null,
            'email_verified_at' => null,
            'created_at'        => null,
            'updated_at'        => null,
        ];
    }

    // Accessor agar $user->name dan $user->email bisa diakses
    public function getNameAttribute()
    {
        return $this->attributes['NAME'] ?? null;
    }

    public function getEmailAttribute()
    {
        return $this->attributes['EMAIL'] ?? null;
    }
}