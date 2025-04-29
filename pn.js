.search-bar {
  display: none;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  padding: 10px;
  background: #333;
  z-index: 1000;
  align-items: center;
}

.search-bar input {
  flex: 1;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.search-bar button {
  background: none;
  border: none;
  color: white;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 20px;
  color: #ccc;
}