<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function index()
    {
        // $orders = OrderItem::all();
        $orders = OrderItem::with('product', 'user')->get();
        return Inertia::render('ShoppingCart', [
            'orders' => $orders,
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $product = Product::findOrFail($request->data['id']);

        $orderItem = new OrderItem();
        $orderItem->user_id = $user->id;
        $orderItem->product_id = $product->id;
        $orderItem->quantity = $request->quantity;
        $orderItem->price = $product->price;
        $orderItem->total = $request->quantity * $product->price;
        $orderItem->save();

        // $orderItem = OrderItem::with('product', 'user')->get();
        return redirect('/');
    }
}

