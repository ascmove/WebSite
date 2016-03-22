from flask import Flask, request, render_template,jsonify
import psycopg2
app = Flask(__name__)
from app import views