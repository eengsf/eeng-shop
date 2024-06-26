<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TotalOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'order_item_value', 'status', 'total_price'
    ];


    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
