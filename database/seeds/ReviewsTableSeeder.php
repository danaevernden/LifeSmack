<?php

use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      DB::table('reviews')->insert([
     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
     'marketplacegoal_id' => 1,
     'name' => 'Jane Doe',
     'review' => 'hilarious and fun to work on, I was able to book my own gig at the Comedy Cellar after!',
     'helpful'=>4,
     'rating'=>5
   ]);

       DB::table('reviews')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'marketplacegoal_id' => 1,
      'name' => 'Stacey Gray',
      'review' => 'could use a section on cross training, I had to define that myself',
      'helpful'=>3,
      'rating'=>3
    ]);

        DB::table('reviews')->insert([
       'created_at' => Carbon\Carbon::now()->toDateTimeString(),
       'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
       'marketplacegoal_id' => 2,
       'name' => 'Stacey Gray',
       'review' => 'Review 1 for goal 2',
       'helpful'=>3,
       'rating'=>3
     ]);

         DB::table('reviews')->insert([
        'created_at' => Carbon\Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
        'marketplacegoal_id' => 3,
        'name' => 'Stacey Gray',
        'review' => 'Review 1 for goal 3',
        'helpful'=>3,
        'rating'=>3
      ]);

          DB::table('reviews')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id' => 4,
         'name' => 'Stacey Gray',
         'review' => 'Review 1 for goal 4',
         'helpful'=>3,
         'rating'=>3
       ]);

           DB::table('reviews')->insert([
          'created_at' => Carbon\Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
          'marketplacegoal_id' => 5,
          'name' => 'Stacey Gray',
          'review' => 'Review 1 for goal 5',
          'helpful'=>3,
          'rating'=>3
        ]);

          DB::table('reviews')->insert([
          'created_at' => Carbon\Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
          'marketplacegoal_id' => 6,
          'name' => 'Stacey Gray',
          'review' => 'Review 1 for goal 6',
          'helpful'=>3,
          'rating'=>3
        ]);

            DB::table('reviews')->insert([
           'created_at' => Carbon\Carbon::now()->toDateTimeString(),
           'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
           'marketplacegoal_id' => 7,
           'name' => 'Stacey Gray',
           'review' => 'Review 1 for goal 7',
           'helpful'=>3,
           'rating'=>3
         ]);

             DB::table('reviews')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'marketplacegoal_id' => 8,
            'name' => 'Stacey Gray',
            'review' => 'Review 1 for goal 8',
            'helpful'=>3,
            'rating'=>3
          ]);

              DB::table('reviews')->insert([
             'created_at' => Carbon\Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
             'marketplacegoal_id' => 9,
             'name' => 'Stacey Gray',
             'review' => 'Review 1 for goal 9',
             'helpful'=>3,
             'rating'=>3
           ]);

               DB::table('reviews')->insert([
              'created_at' => Carbon\Carbon::now()->toDateTimeString(),
              'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
              'marketplacegoal_id' => 10,
              'name' => 'Stacey Gray',
              'review' => 'Review 1 for goal 10',
              'helpful'=>3,
              'rating'=>3
            ]);


                DB::table('reviews')->insert([
               'created_at' => Carbon\Carbon::now()->toDateTimeString(),
               'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
               'marketplacegoal_id' => 11,
               'name' => 'Stacey Gray',
               'review' => 'Review 1 for goal 11',
               'helpful'=>3,
               'rating'=>3
             ]);

                 DB::table('reviews')->insert([
                'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                'marketplacegoal_id' => 12,
                'name' => 'Stacey Gray',
                'review' => 'Review 1 for goal 12',
                'helpful'=>3,
                'rating'=>3
              ]);

                  DB::table('reviews')->insert([
                 'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                 'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                 'marketplacegoal_id' => 13,
                 'name' => 'Stacey Gray',
                 'review' => 'Review 1 for goal 13',
                 'helpful'=>3,
                 'rating'=>3
               ]);

                   DB::table('reviews')->insert([
                  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                  'marketplacegoal_id' => 14,
                  'name' => 'Stacey Gray',
                  'review' => 'Review 1 for goal 14',
                  'helpful'=>3,
                  'rating'=>3
                ]);

                    DB::table('reviews')->insert([
                   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                   'marketplacegoal_id' => 15,
                   'name' => 'Stacey Gray',
                   'review' => 'Review 1 for goal 15',
                   'helpful'=>3,
                   'rating'=>3
                 ]);

  }
}
