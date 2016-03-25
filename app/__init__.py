from flask import Flask, request, render_template,jsonify
import psycopg2
app = Flask(__name__)
app.secret_key = 'you-will-never-guess'
from app import views