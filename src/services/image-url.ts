const getCroppedUrl = (url: string) => {
    
    if(url == null) return ""; //must return default backgroud image

    const target = 'media/'
    const index = url.indexOf(target) + target.length;
    const newUrl = url.slice(0,index)+ 'crop/600/400/' + url.slice(index)
    console.log(newUrl);
    return newUrl;
}

export default getCroppedUrl;