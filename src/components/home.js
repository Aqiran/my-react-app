import './home.css';

const Home = () => {
   return (
      <div class="hometables">

         <div class="row">
            <div class="column">
               <table>
                  <tr>
                     <th>Tools</th>
                     <th>Process</th>
                     <th>MainFeatures</th>
                  </tr>
                  <tr>
                     <td>Algonox</td>
                     <td>P2P</td>
                     <td>OCR</td>
                  </tr>
                  <tr>
                     <td>ASV</td>
                     <td>P2P</td>
                     <td>OCR</td>
                  </tr>
                  <tr>
                     <td>Blackline</td>
                     <td>R2R</td>
                     <td>Automate Account Recovery</td>
                  </tr>
               </table>
            </div>
            <div class="column">
               <table>
                  <tr>
                     <th>Engagements</th>
                     <th>Process</th>
                     <th>Region</th>
                  </tr>
                  <tr>
                     <td>Warner Bros</td>
                     <td>P2P</td>
                     <td>Americas</td>
                  </tr>
                  <tr>
                     <td>Unileve</td>
                     <td>P2P</td>
                     <td>Europe</td>
                  </tr>
                  <tr>
                     <td>TCF</td>
                     <td>P2P</td>
                     <td>Americas</td>
                  </tr>
               </table>
            </div>
         </div>
      </div>


   );
}

export default Home;