<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Product;
use App\Models\TotalOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $user = Auth::user();
        $orders = [];
        if ($user) {
            $orders = OrderItem::with('product', 'user')->where('user_id', $user->id)->get();
        }

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
            'orders' => $orders
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        $orderItems = OrderItem::with('user', 'product')->where('user_id', $user->id)->get();
        $orderItemValues = $orderItems->map(function ($orderItem) {
            return $orderItem->toArray();
        });

        TotalOrder::create([
            'user_id' => $user->id,
            'order_item_value' => $orderItemValues,
            'total_price' => $request->total_price,
        ]);

        return redirect()->route('welcome')->with('success', 'Product created successfully.');
    }

    public function update(Request $request, $id)
    {
        $orders = OrderItem::find($id);
        $orders->update([
            'quantity' => $request->get('qnt'),
        ]);
        return redirect()->route('welcome')->with('success', 'Product updated successfully');
    }
    public function asc()
    {
        $products = Product::orderBy('name', 'asc')->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
        ])->with('label', 'A-Z Selections');
    }
    public function desc()
    {
        $products = Product::orderBy('name', 'desc')->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
        ])->with('label', 'Z-A Selections');
    }
    public function high()
    {
        $products = Product::orderBy('price', 'desc')->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
        ])->with('label', 'Highest Priced');
    }
    public function low()
    {
        $products = Product::orderBy('price', 'asc')->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
        ])->with('label', 'Lowest Priced');
    }
    // public function top()
    // {

    // }
}
