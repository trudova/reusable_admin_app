import "./widgetSm.css"
import {Visibility} from '@material-ui/icons'

export default function WidgetSm() {
    return (
        <div className="widgetSm">
           <span className="widgetSmTitle">New Members</span>
           <ul className="widgetSmList">
               <li className="widgetSmListItem">
                   <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername"> Anna Smith</span>
                       <span className="widgetSmUserTitle"> Software Engineer</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>


               {/* double */}
               <li className="widgetSmListItem">
                   <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername"> Anna Smith</span>
                       <span className="widgetSmUserTitle"> Software Engineer</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>

               <li className="widgetSmListItem">
                   <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername"> Anna Smith</span>
                       <span className="widgetSmUserTitle"> Software Engineer</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>


            <li className="widgetSmListItem">
                   <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername"> Anna Smith</span>
                       <span className="widgetSmUserTitle"> Software Engineer</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>


               <li className="widgetSmListItem">
                   <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" className="widgetSmImg" />
                   <div className="widgetSmUser">
                       <span className="widgetSmUsername"> Anna Smith</span>
                       <span className="widgetSmUserTitle"> Software Engineer</span>
                   </div>
                   <button className="widgetSmButton"><Visibility className="widgetSmIcon"/>Display</button>
               </li>
           </ul>
        </div>
    )
}
