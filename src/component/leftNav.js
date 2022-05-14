import './leftNav.css'

function LeftNav() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }
    return (
        <div className="leftNav">
                <h3>heading 1</h3>
                <div class="content">
                    <ul>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                    </ul>
                </div>
                <h3>heading 2</h3>
                <div class="content">
                    <ul>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                    </ul>
                </div>
                <h3>heading 3</h3>
                <div class="content">
                    <ul>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                    </ul>
                </div>
                <h3>heading 4</h3>
                <div class="content">
                    <ul>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                        <li> http://localhost:3000 </li>
                    </ul>
                </div>
        </div>
    )
}

export default LeftNav;