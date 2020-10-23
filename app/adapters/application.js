import PouchDB from "ember-pouch/pouchdb";
import {Adapter} from "ember-pouch";

let remote = new PouchDB("http://localhost:5984/todo");
let db = new PouchDB("local_pouch");

db.sync(remote, {
	live: true,   // do a live, ongoing sync
	retry: true   // retry if the connection is lost
});

export default class ApplicationAdapter extends Adapter {
	db = db;
}
