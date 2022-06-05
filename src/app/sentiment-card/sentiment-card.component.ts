import { Component, OnInit , Input, SimpleChange} from '@angular/core';
import { Data } from '@angular/router';
import {Chart, registerables} from 'chart.js';


@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.scss']
})
export class SentimentCardComponent implements OnInit {
  @Input()
  data_busqueda: Data;
  myChart: any;
  

  constructor() {}

  ngOnInit() {
    this.myChart = document.getElementById("pieChartPolaridad");
    Chart.register(...registerables);
     new Chart(this.myChart, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {
      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);
      this.data_busqueda = JSON.parse( curVal);

      console.log(this.data_busqueda)
    }
  }

}
