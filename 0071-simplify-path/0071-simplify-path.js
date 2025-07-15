/**
 * @param {string} path
 * @return {string}
 */
 // absolute path for a Unix-style file system
    // always begin with '/'
    // .       : current dir
    // ..      : prev/parent dir
    // periods over 2 : treated as dir or file name (e.g., '...')
    // //, /// : treated as a single /

// simplified canonical path
    // start w/ '/'
    // not end w/ '/' unless root
    // dirs separated by exact one '/'

var simplifyPath = function(path) {
    // early exit if path is '/' (root)
    if (path === '/') return '/'

    // split path into an array with '/'
    const paths = path.split('/')

    // create an empty array to save canonical paths
    const simplifiedPaths = []
    
    // loop through paths with i from 1 to paths.length - 1
    for (el of paths) {
        // for current element el,
        // if el === '//' or '///', ignore
        // if el === '.', ignore
        if (el === '' || el === '.')
            continue

        // if el === '..', simplifiedPaths.pop()
        if (el === '..')
            simplifiedPaths.pop()

        // else simplifiedPaths.push(el)
        else 
            simplifiedPaths.push(el)
    }
    
    // return simplifiedPaths joined by '/'
    return '/' + simplifiedPaths.join('/')
};