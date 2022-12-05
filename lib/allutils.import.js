
/*///////////////////////////////////////////////allUtils.js////12/23/2021/////////////////////////////////////////
/*****************************************************************************************************

This section is my(Patrick Ring) personal collection of homemade javascript utilities.

pageStorage mirrors the localStorage api but appends objects to the page header. This is useful for 
many purposes including synchronizing values across scripts and not having to worry about the values
getting removed by garbage collection but not having the live beyond the life of the page.

winStorage attaches a map to the wandow object. Useful when syncing up variables whose reference is hard to find.

funcStorage leverages pageStorage to create vaiables that are only accessible by the calling function
but any instance of that function. This is good for multiple similar functions using pageStorage with
the same variable names

pathStorage uses localStorage and prepends the wandow pathname to the key so that pages that use the same
variable names won't step on eachother.

domainStorage is built to mirror localStorage api as well but is visible across the highest domain available.
Typically this is usaa.com. It utilizes the cookie space which is only 4kb much smaller than localStorage's 5mb.

Additional functions appended to localStorage for easy reading of integers,and floats. This is helpful for 
creating counters that live in the localStorage space.

offset is for finding the exact coordinates of an element on the page.




******************************************************************************************************/
import './sleep.js';
import './extStorage.js';
import './bkInterval.js';
import './betterAjax.js';
import './getStyle.js';



/*/////////////end allUtils//////////////////////////////////////////////////////////*/

/*///////////////object handy utilities start//////////////////////////////////*/

String.prototype.contains = function(s) {


  if (this.indexOf(s) > -1) {


    return true;

  } else {


    return false;


  }

}


Array.prototype.slice.uniq = function() {


  return [...new Set(this)];



}



/*///////////////object handy utilities end//////////////////////////////////*/
