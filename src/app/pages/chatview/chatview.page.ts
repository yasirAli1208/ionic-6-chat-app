import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatview',
  templateUrl: './chatview.page.html',
  styleUrls: ['./chatview.page.scss'],
})
export class ChatviewPage implements OnInit {
  messages = [
    {
      user:'yasir',
      createdAt:1234234,
      msg:'Hi there its chatter box'
    },
    {
      user:'anonymouse',
      createdAt:1234234,
      msg:'Seems cool!'
    },
    {
      user:'yasir',
      createdAt:1234234,
      msg:'yah!'
    }
  ];

  currentUser = 'yasir'

  constructor() { }

  ngOnInit() {
  }



}
