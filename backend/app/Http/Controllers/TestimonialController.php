<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function index()
    {
        return view('admin.testimonials.index', ['testimonials' => Testimonial::latest()->paginate(15)]);
    }

    public function store(Request $request)
    {
        Testimonial::create($this->validateData($request));

        return back()->with('ok', 'Testimoni ditambahkan.');
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $testimonial->update($this->validateData($request));

        return back()->with('ok', 'Testimoni diperbarui.');
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();

        return back()->with('ok', 'Testimoni dihapus.');
    }

    private function validateData(Request $request): array
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'role' => ['nullable', 'string', 'max:100'],
            'text' => ['required', 'string', 'max:1000'],
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'is_published' => ['boolean'],
        ]);
        $data['is_published'] = $request->boolean('is_published');

        return $data;
    }
}
