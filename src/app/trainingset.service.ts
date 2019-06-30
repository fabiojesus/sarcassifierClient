import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class TrainingsetService {

  //url = 'https://sarcassifier.herokuapp.com/';
  url = "http://localhost:3000/";
  
  userendpoint = 'login'; 
  
  
  trainingsetendpoint = 'trainingset'; 
  trainendpoint = 'train'; 
  lastTrainendpoint = 'lastTrain'; 
  classifyendpoint = 'classify'; 
  statsendpoint = 'stats'; 
  removeStopWordsendpoint = 'removeStopWords'; 
  cleanendpoint = 'clean'; 
  ngramendpoint = 'ngram'; 
  tfendpoint = 'tf'; 
  stemendpoint = 'stem'; 
  bagOfWordsendpoint = 'bow'; 
  idfendpoint = 'idf'; 
  tfidfendpoint = 'tfidf';
  binaryVectorendpoint = 'binaryVector'; 
  numberofOcurrencesVectorendpoint = 'numberofOcurrencesVector'; 
  tfVectorendpoint = 'tfVector'; 
  tfIdfVectorendpoint = 'tfidfVector'; 
  euclidianendpoint = 'euclidean';
  cossenoendpoint = 'cosseno';
  precisionendpoint = 'precision';
  recallendpoint = 'recall';
  fmeasureendpoint = 'fmeasure';
  sentimentendpoint = 'sentiment';
  addDocumentendpoint = 'addDocument'; 

  constructor(private http: HttpClient) { }
  
  GetUser(userData){
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+this.userendpoint, {params:{user:JSON.stringify(userData)}}).subscribe(data => resolve(data), err => reject(err));
    });
  }



  getTrainingSet(userData){
    return new Promise((resolve, reject)=>{
      this.http.get(this.url+this.trainingsetendpoint, {params:{user:JSON.stringify(userData)}}).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Train(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.url+this.trainendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  GetLastTrain(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.url+this.lastTrainendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  

  Classify(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.url+this.classifyendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  AddDocument(comment, classification){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      headers.append('classification', classification);
      this.http.get(this.url+this.addDocumentendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Stats(user){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('user', user);
      this.http.get(this.url+this.classifyendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  RemoveStopWords(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.url+this.removeStopWordsendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Clean(comment){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      this.http.get(this.url+this.cleanendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Ngram(comment, n){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('comment', comment);
      headers.append('n', n);
      this.http.get(this.url+this.cleanendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Stem(word){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('word', word);
      this.http.get(this.url+this.stemendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  BagOfWords(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.bagOfWordsendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }


  ///VALIDAR
  Tf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.tfendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Idf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.idfendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  TfIdf(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.tfidfendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  BinaryVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.binaryVectorendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  OcurrencesVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.numberofOcurrencesVectorendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  TfVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.tfVectorendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }


  TfIdfVector(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.tfIdfVectorendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }


  Precission(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.precisionendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Recall(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.recallendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }


  FMeasure(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.fmeasureendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  

  Sentiment(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.sentimentendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }

  Cosseno(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.cossenoendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }


  Euclidian(text){
    return new Promise((resolve, reject)=>{
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('text', text);
      this.http.get(this.url+this.euclidianendpoint).subscribe(data => resolve(data), err => reject(err));
    });
  }
}
