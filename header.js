const btnnavbar=document.querySelector('#nav-bar-btn');
btnnavbar.addEventListener('click',function(){
    const dlnavbar=document.querySelector('.nav-wrapper');
    dlnavbar.style.display='block';

    
    const itemheaderlist=document.querySelectorAll('.item-header-list');
    for( const ads of itemheaderlist){
        const btnliscontent=ads.querySelectorAll('.btn-list-content');
                        
        for(const bds of btnliscontent ){
            bds.addEventListener('click',function(){
                const dllistcontentdoccument=document.querySelectorAll('.list-content');
                for(const cds of dllistcontentdoccument){
                    cds.style.display='none'
                }
                const dllistcontent=ads.querySelector('.list-content');
                dllistcontent.style.display='block';
            });
        }
        
    }
    
    
});
const btnexit=document.querySelector('.exit');
btnexit.addEventListener('click',function(){
    const dlnavbar=document.querySelector('.nav-wrapper');
    dlnavbar.style.display='none';});
