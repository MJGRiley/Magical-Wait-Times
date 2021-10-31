// include the Themeparks library
// const Themeparks = require("themeparks");

// access a specific park
//  Create this *ONCE* and re-use this object for the lifetime of your application
//  re-creating this every time you require access is very slow, and will fetch data repeatedly for no purpose

// const DisneyWorldMagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

const fantasyArray = ['Prince Charming Regal Carrousel', "Mickey's Philhar Magic", "Peter Pan's Flight", "it's a small world", "Under the Sea ~ Journey of the Little Mermaid", "The Barnstormer", "Dumbo the Flying Elephant", "Mad Tea Party", "The Many Adventures of Winnie the Pooh", "Seven Dwarfs Mine Train"]
const tomorrowArray = ["Tomorrowland Speedway", "Space Mountain", "Astro Orbiter", "Tomorrowland Transit Authority PeopleMover", "Walt Disney's Carousel of Progress", "Buzz Lightyear's Space Ranger Spin", "Monsters, Inc. Laugh Floor"]
const libertyArray = ["The Hall of Presidents", "Liberty Square Riverboat", "Haunted Mansion"]
const adventureArray = ["Swiss Family Treehouse", "The Magic Carpets of Aladdin", "Jungle Cruise", "Walt Disney's Enchanted Tiki Room", "Pirates of the Caribbean"]
const frontierArray = ["Splash Mountain", "Big Thunder Mountain Railroad", "Country Bear Jamboree"]

// Access wait times by Promise
const CheckWaitTimes = (landName) => {
    DisneyWorldMagicKingdom.GetWaitTimes()
    .then((rideTimes) => {
        const tempArray = []
        switch (landName) {
            case 'fantasyland':  tempArray = getRideTimes(fantasyArray);
                break;
            case 'tomorrowland': tempArray = getRideTimes(tomorrowArray);
                break;
            case 'libertysquare': tempArray = getRideTimes(libertyArray);
                break;
            case 'adventureland': tempArray = getRideTimes(adventureArray);
                break;
            case 'frontierland': tempArray = getRideTimes(frontierArray);
                break;
        }
        console.log(tempArray)
        return tempArray;
    }).catch((error) => {
        console.error(error);
    }).then(() => {
        setTimeout(CheckWaitTimes, 1000 * 60 * 5); // refresh every 5 minutes
        
    });

    getRIdeTimes = (rides) => {
        const tempArray =[]
        rideTimes.forEach((ride) => {
            if (rides.includes(ride)) {
                tempArray.push(ride)
            }
        })
        console.log(tempArray)
        return tempArray
    }
   
};
 module.exports = (land) => {
    switch (land) {
        case 'fantasyland': return fantasyArray;
        
        case 'tomorrowland': return tomorrowArray;
           
        case 'libertysquare': return libertyArray;
            
        case 'adventureland': return adventureArray;
            
        case 'frontierland': return frontierArray;
            
    }
}



