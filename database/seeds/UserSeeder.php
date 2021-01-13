<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)
            ->create([
                'name'=> 'test1',
                'email' => 'absolute_test1@example.com',
            ]);
        factory(User::class, 4)
            ->create();
    }
}
