<?php


use Illuminate\Database\Seeder;

class MarketplacegoalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


/*      $user_id = \App\User::where('name','=','Jamal Smith')->pluck('id');*/
       DB::table('marketplacegoals')->insert([
      'created_at' => Carbon\Carbon::now()->toDateTimeString(),
      'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
      'marketplacegoal_id' => 1,
      'name'=> 'Joan Rivers',
      'specialist_id'=> 1,
      'goal_name' => 'get your first gig as a comedian',
      'rating' => 2,
      'plan_description' => 'weeks 1-3: bit writing, weeks 4-6: performing with friends, weeks 7-9: hustling for your first gig',
      'category_id_1' => 1,
        ]);

        DB::table('marketplacegoals')->insert([
       'created_at' => Carbon\Carbon::now()->toDateTimeString(),
       'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
       'marketplacegoal_id' => 2,
       'name'=> 'Meb',
       'specialist_id'=> 2,
       'goal_name' => 'PR on your next 10K race',
       'rating' => 4,
       'plan_description' => 'week 1: 2 mi tempo, 3 mi run, 2 mi easy. week 2: 1 mi speedwork, 4 mi easy, 2 mi run',
       'category_id_1' => 2,
         ]);

         DB::table('marketplacegoals')->insert([
        'created_at' => Carbon\Carbon::now()->toDateTimeString(),
        'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
        'marketplacegoal_id' => 3,
        'name'=> 'David Ortiz',
        'specialist_id'=> 3,
        'goal_name' => 'Tips on improving your batting average',
        'rating' => 3,
        'plan_description' => 'watch David Ortiz discuss his secrets for improving his batting average',
        'category_id_1' => 2,
          ]);

          DB::table('marketplacegoals')->insert([
         'created_at' => Carbon\Carbon::now()->toDateTimeString(),
         'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
         'marketplacegoal_id' => 4,
         'name'=> 'David Ortiz',
         'specialist_id'=> 3,
         'goal_name' => 'Nailing the home run dance',
         'rating' => 5,
         'plan_description' => 'watch David Ortiz discuss his secrets for nailing his homer dance',
         'category_id_1' => 2,
           ]);

           DB::table('marketplacegoals')->insert([
          'created_at' => Carbon\Carbon::now()->toDateTimeString(),
          'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
          'marketplacegoal_id' => 5,
          'name'=> 'Bill Gates',
          'specialist_id'=> 3,
          'goal_name' => 'Find a volunteer group to commit to',
          'rating' => 5,
          'plan_description' => 'Time to finally give back to your community',
          'category_id_1' => 1,
            ]);

            DB::table('marketplacegoals')->insert([
           'created_at' => Carbon\Carbon::now()->toDateTimeString(),
           'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
           'name'=> 'NatGeo',
           'marketplacegoal_id' => 6,
           'specialist_id'=> 4,
           'goal_name' => 'Become a hired photographer',
           'rating' => 5,
           'plan_description' => 'Interested in getting paid photography gigs? Grab this goal!',
           'category_id_1' => 4,
             ]);

             DB::table('marketplacegoals')->insert([
            'created_at' => Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
            'marketplacegoal_id' => 7,
            'name'=> 'Oprah',
            'specialist_id'=> 5,
            'goal_name' => 'How to build confidence and feel beautiful',
            'rating' => 4,
            'plan_description' => 'Turn your life around with this goal!',
            'category_id_1' => 1,
              ]);

              DB::table('marketplacegoals')->insert([
             'created_at' => Carbon\Carbon::now()->toDateTimeString(),
             'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
             'marketplacegoal_id' => 8,
             'name'=> 'Judge Judy',
             'specialist_id'=> 6,
             'goal_name' => 'DIY Backyard Wedding',
             'rating' => 5,
             'plan_description' => 'Why waste money on a wedding when you will probably get divorced?',
             'category_id_1' => 1,
               ]);

                DB::table('marketplacegoals')->insert([
               'created_at' => Carbon\Carbon::now()->toDateTimeString(),
               'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
               'marketplacegoal_id' => 9,
               'name'=> 'Bobby Flay',
               'specialist_id'=> 8,
               'goal_name' => 'Cook a superb fois grois',
               'rating' => 3,
               'plan_description' => 'Impress your girlfriend with fancy new cooking skills',
               'category_id_1' => 6,
                 ]);

                 DB::table('marketplacegoals')->insert([
                'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                'marketplacegoal_id' => 10,
                'name'=> 'Chloe',
                'specialist_id'=> 9,
                'goal_name' => 'Become a vegan',
                'rating' => 2,
                'plan_description' => 'Daily goals to transition cold turkey (pun intended) to a plant based diet',
                'category_id_1' => 6,
                  ]);

                  DB::table('marketplacegoals')->insert([
                 'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                 'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                 'marketplacegoal_id' => 11,
                 'name'=> 'NatGeo',
                 'specialist_id'=> 7,
                 'goal_name' => 'Plan your first trip abroad',
                 'rating' => 5,
                 'plan_description' => 'International travel is pretty easy with this goal!',
                 'category_id_1' => 5,
                   ]);

                   DB::table('marketplacegoals')->insert([
                  'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                  'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                  'marketplacegoal_id' => 12,
                  'name'=> 'NatGeo',
                  'specialist_id'=> 7,
                  'goal_name' => 'Work and live abroad',
                  'rating' => 5,
                  'plan_description' => 'Sick of your country? Get outta there!',
                  'category_id_1' => 5,
                    ]);

                    DB::table('marketplacegoals')->insert([
                   'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                   'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                   'marketplacegoal_id' => 13,
                   'name'=> 'Sheldon',
                   'specialist_id'=> 10,
                   'goal_name' => 'Start a weekly game night',
                   'rating' => 2,
                   'plan_description' => 'Game nights are sweeping the nation!',
                   'category_id_1' => 3,
                     ]);

                     DB::table('marketplacegoals')->insert([
                    'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                    'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                    'marketplacegoal_id' => 14,
                    'name'=> 'Steve',
                    'specialist_id'=> 11,
                    'goal_name' => 'Find a new hobby',
                    'rating' => 2,
                    'plan_description' => 'Find a new hobby with this goal',
                    'category_id_1' => 3,
                      ]);

                      DB::table('marketplacegoals')->insert([
                     'created_at' => Carbon\Carbon::now()->toDateTimeString(),
                     'updated_at' => Carbon\Carbon::now()->toDateTimeString(),
                     'marketplacegoal_id' => 15,
                     'name'=> 'James',
                     'specialist_id'=> 12,
                     'goal_name' => 'Become a professional illustrator',
                     'rating' => 5,
                     'plan_description' => 'I followed these steps to become a professional illustrator, do not make the same mistakes I did',
                     'category_id_1' => 4,
                       ]);
    }
}
