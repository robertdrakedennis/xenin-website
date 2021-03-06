<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class Articles extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request){
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'short_body' => $this->short_body,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
