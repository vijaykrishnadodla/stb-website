import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

export const checkFilePermissions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const filePath = req.path;
    const stats = await fs.promises.stat(filePath);
    
    // Log current permissions
    console.log('📁 File permissions:', {
      path: filePath,
      mode: stats.mode.toString(8),
      uid: stats.uid,
      gid: stats.gid
    });

    next();
  } catch (error) {
    console.error('❌ Permission check error:', error);
    next();
  }
};