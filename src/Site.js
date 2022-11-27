import img1 from "./assets/stranger.jpg"
import img2 from "./assets/stranger2.png"
function Site() {
    return (
        <div>
            <div className="navbar navbar-expand-md navbar-light bg-dark ">
                <div className="navbar-brand p-3 ms-3">
                    <img className="text-bg-info   p-3 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUhJREFUSEu1lYERwUAURFcFlKAEJdCBEpSgBCqgBCXQgRJ0gApQAfNmsiaJm/w75M9kjFxu9//dvWSgnmvQM75+IZhKOkYN/kKwksTVWd8SLCTdJe37IECapaR5BM566QR0DjgkI0mTaIoSgl0FCDjaXyRtoylyCdw5HQOO/iF4iUROC79PSbOciJYQIAumoj/JGVYkkUJFJhsc0HPuFLkeuFO8wGym8FlgDW9OqXG6CMY1SdiMsS4D8gz3iSzEkJKud3URoDlXY0O1k3uAMonXSRX/G++nSCJAMDj1SmDNUzERHjFBo3II6AwwLiJ6lYQ0dFpfK/bAnQBGpaT6S0zxgQN2a5m8zjnNKYmQYiPp0NLeL7d2ouBljUk/ZEoR2DCbyKFK1aMCRjqnCl/qcQ5PsruGAIPrRbpsuD8+Hz5FKQpNjB7oneAFrTxDGY7YLNQAAAAASUVORK5CYII=" />
                  
                </div>
            <button className="bg-dark  navbar-toggler" data-bs-toggle="collapse" data-bs-target="#md">

                <span className="navbar-toggler-icon"></span>
            </button>
                <div id="md" className=" justify-content-end navbar-nav collapse navbar-collapse ">
                    <li className="nav-item  b"><a className="nav-link text-light">Home</a></li>
                    <li className="nav-item  b"><a className="nav-link text-light">About</a></li>
                    <li className="nav-item  b"><a className="nav-link text-light">Services</a></li>
                    <li className="nav-item  b"><a className="nav-link text-light">Team</a></li>
                    <li className="nav-item  b"><a className="nav-link text-light">Connect</a></li>


                </div>



            </div>

            {/* carousel */}
            <div className="" >
            <div id="banner" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#banner" data-bs-slide-to="1"></button>

                </div>

                <div class="carousel-inner w-100">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100 " style={{maxHeight: "800px"}}/>
                     <div className="carousel-caption">
<h3 className="display-2">a</h3>
<button className="btn btn-outline-light btn-lg">i am invisible bro</button>
<button className="btn btn-primary btn-lg">bro?</button>
                     </div>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="d-block w-100 h-25 "style={{maxHeight: "800px"}} />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" ></span>

                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
                    <span class="carousel-control-next-icon" ></span>

                </button>
            </div>
            </div>
            

            <div className="row" style={{backgroundColor : "#E8E9EE"}}>
              <div className="col-xs-1 col-md-3">
              <p className="" style={{wordWrap: "break-word"}}>asaasaasasasasaasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasassasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasas</p>
              </div>
              <div className="col-xs-1 col-md-3">
              <p className="" style={{wordWrap: "break-word"}}>asaasaasasasasaasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasassasaasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasaasaasasasasasasaasasasasasasasasasasasasasasasasasasasasasasasasasasas</p>
              </div>
            </div>

        </div>



    )
}

export default Site;