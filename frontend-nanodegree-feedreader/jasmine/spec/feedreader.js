/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Determines if allFeeds have a url and that the url is not empty


         it ('URLs are defined', function(){
            for (allFeeds.url of allFeeds){
            expect(allFeeds.url).toBeDefined();
            expect(allFeeds.url.length).not.toBe(0);
            }
        });
       
        // Determines if allFeeds have a Name and that the Name is not empty

          it ('Names are defined', function(){
            for (allFeeds.name of allFeeds){
            expect(allFeeds.name).toBeDefined();
            expect(allFeeds.name.length).not.toBe(0);
            }
        });
    });


    /* test suite for The menu */
    describe('The menu', function() {

        

         // a test for the menu hidden class
         it ('Menu element is hidden', function(){

            expect($('body').hasClass('menu-hidden')).toEqual(true);

         });

        
          // test for Menu Toggle

          it ('Menu Toggle on Click works perfect', function(){
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);

         });

     });
    // New test suite that will test initial entries
    describe('Initial Entries', function () {

        // Calls a function to do an asynchronous request 
        beforeEach(function (done) {
            loadFeed(0, done); 
            });
        });

        // Tests if the loadFeed function has at least a single '.entry' within
        // the '.feed' container
        it('define if feed has at least a single entry', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    // New test suite that looks for new feed selections
    describe('New Feed Selection', function() {
        var firstFeed, secondFeed;
        
        // Ensures that the new feed is loaded via the loadFeed function
        beforeEach(function(done) {
            loadFeed(1, function() {

                // Tests if first feed is loaded
                console.log('First feed loaded!')

                // Loads first entry and checks
                firstFeed = $('.feed').html();
                loadFeed(2, function() {

                    // Tests if second feed is loaded
                    console.log('Second feed loaded!')
                    done();
                });
            });        
         });
        
        afterEach(function() {
            loadFeed(0);
        });

        // Tests to see if two entries are not equal
        it('checks if two feeds are different', function() {

            // Checks second feed
            secondFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(secondFeed);
        }); 
    });
}());
