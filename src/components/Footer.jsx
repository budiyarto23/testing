import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="full-width-div bg-dark">
             <footer class="page-footer font-small unique-color-dark">
                    {/* <div class="container">
                    </div> */}
                    <div class="footer-copyright text-center py-3" style={{marginBottom: "-24px", fontSize: '12px', color: 'white'}}>© 2019 Copyright:
                    <span>  Ahmad Budiyarto</span>
                </div>
              </footer>
            </div>
        )
    }
}

export default Footer;
