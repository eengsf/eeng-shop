<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products', [
            'products' => $products,
        ]);
    }


    public function create()
    {
        return Inertia::render('ProductsForm');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        if ($request->hasFile('image')) {

            $image = $request->file('image');
            $filename = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $filename);

            Product::create([
                'name' => $request->get('name'),
                'description' => $request->get('description'),
                'category' => "default",
                'stock' => 100,
                'price' => $request->get('price'),
                'image' => $filename
            ]);


            return redirect()->route('dashboard')->with('success', 'Product created successfully.');
        } else {
            return redirect()->back()->withErrors(['image' => 'gagal'])->withInput();
        }

    }

    public function edit($id)
    {
        $products = Product::find($id);

        return Inertia::render('ProductsEdit', [
            'products' => $products,
        ]);
    }

    public function update(Request $request, $id)
    {

        $product = Product::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $product->update($validatedData);

        return redirect()->route('products.index')->with('success', 'Product updated successfully');

    }

    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('products.index')->with('success', 'Product deleted successfully');
    }
}
