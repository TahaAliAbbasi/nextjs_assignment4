import Recent_post_section from "./Recent_post_section";

export default function Recentpost(){
    return(
        <div id="recentpost">
            <p id="rpsva">View all</p>
            <p id="rpsrp">Recent Post</p>
           <div id="rpsa"><Recent_post_section /></div> 
           <div id="rpsb"><Recent_post_section /></div> 
        </div>
    )
}