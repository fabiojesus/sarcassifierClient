import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class TrainingsetService {
  trainingsetUrl = 'https://sarcassifier.herokuapp.com/trainingset'; //OK
  trainUrl = 'https://sarcassifier.herokuapp.com/train'; //OK
  lastTrainUrl = 'https://sarcassifier.herokuapp.com/lastTrain'; //OK
  userUrl = 'https://sarcassifier.herokuapp.com/login'; //OK
  classifyUrl = 'https://sarcassifier.herokuapp.com/classify'; //OK
  statsUrl = 'https://sarcassifier.herokuapp.com/stats'; //OK
  removeStopWordsUrl = 'https://sarcassifier.herokuapp.com/removeStopWords'; //OK
  cleanUrl = 'https://sarcassifier.herokuapp.com/clean'; //OK
  ngramUrl = 'https://sarcassifier.herokuapp.com/ngram'; //OK
  tfUrl = 'https://sarcassifier.herokuapp.com/tf'; //OK
  stemUrl = 'https://sarcassifier.herokuapp.com/stem'; //OK
  bagOfWordsUrl = 'https://sarcassifier.herokuapp.com/bow'; //OK
  idfUrl = 'https://sarcassifier.herokuapp.com/idf'; //OK
  tfidfUrl = 'https://sarcassifier.herokuapp.com/tfidf';//OK
  binaryVectorUrl = 'https://sarcassifier.herokuapp.com/binaryVector'; //OK
  numberofOcurrencesVectorUrl = 'https://sarcassifier.herokuapp.com/numberofOcurrencesVector'; //OK
  tfVectorUrl = 'https://sarcassifier.herokuapp.com/tfVector'; //OK
  tfIdfVectorUrl = 'https://sarcassifier.herokuapp.com/tfidfVector'; //OK
  euclidianUrl = 'https://sarcassifier.herokuapp.com/euclidean';
  cossenoUrl = 'https://sarcassifier.herokuapp.com/cosseno';
  precisionUrl = 'https://sarcassifier.herokuapp.com/precision';
  recallUrl = 'https://sarcassifier.herokuapp.com/recall';
  fmeasureUrl = 'https://sarcassifier.herokuapp.com/fmeasure';
  sentimentUrl = 'https://sarcassifier.herokuapp.com/sentiment';
  addDocumentUrl = 'https://sarcassifier.herokuapp.com/addDocument'; //OK

  constructor(private http: HttpClient) { }

  getTrainingSet(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.trainingsetUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Train(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.trainUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  GetLastTrain(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.lastTrainUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  GetUser(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.userUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Classify(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.classifyUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  AddDocument(comment, classification){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      headers.append('classification', classification);
      this.http.get(this.addDocumentUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Stats(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.classifyUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  RemoveStopWords(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.removeStopWordsUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Clean(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.cleanUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Ngram(comment, n){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      headers.append('n', n);
      this.http.get(this.cleanUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Stem(word){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('word', word);
      this.http.get(this.stemUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  BagOfWords(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.bagOfWordsUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }


  ///VALIDAR
  Tf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.tfUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Idf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.idfUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  TfIdf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.tfidfUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  BinaryVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.binaryVectorUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  OcurrencesVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.numberofOcurrencesVectorUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  TfVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.tfVectorUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }


  TfIdfVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.tfIdfVectorUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }


  Precission(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.precisionUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Recall(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.recallUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }


  FMeasure(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.fmeasureUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  

  Sentiment(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.sentimentUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Cosseno(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.cossenoUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }


  Euclidian(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.euclidianUrl).subscribe(data => resolve(data), err => reject(err));
    });
  }
}
