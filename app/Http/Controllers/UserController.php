<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\Product;
use App\Models\TotalOrder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $products = Product::all();
        $user = Auth::user();
        $totalOrders = [];
        $orders = [];

        if ($user) {
            $orders = OrderItem::with('product', 'user')->where('user_id', $user->id)->get();
        }
        if ($user) {
            $totalOrders = TotalOrder::with('user')->where('user_id', $user->id)->get();
        }
        // dd($totalOrders);

        return Inertia::render('UserPage', [
            'products' => $products,
            'orders' => $orders,
            'totalOrders' => $totalOrders
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

        return redirect()->route('user.index')->with('success', 'Product created successfully.');
    }

    public function update(Request $request, $id)
    {
        $orders = OrderItem::find($id);
        $orders->update([
            'quantity' => $request->get('qnt'),
        ]);
        return redirect()->route('user.index')->with('success', 'Product updated successfully');
    }

    public function destroy($id)
    {
        $orders = OrderItem::find($id);
        $orders->delete();

        return redirect()->route('user.index')->with('success', 'Product deleted successfully');
    }
}
